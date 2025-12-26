"use client";

import { use } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Smile,
  Clock,
  CheckCircle2,
  Users,
  MessageSquare,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface AnalyticsPageProps {
  params: Promise<{
    project_id: string;
  }>;
}

// Mock data for analytics
const analyticsData = {
  customerSatisfaction: 92.5,
  avgResponseTime: 1.8, // seconds
  resolutionRate: 85, // percentage
  dailyActiveUsers: {
    count: 1250,
    trend: 0.05, // 5% increase
    history: [
      { date: "2023-10-21", users: 1100 },
      { date: "2023-10-22", users: 1150 },
      { date: "2023-10-23", users: 1200 },
      { date: "2023-10-24", users: 1180 },
      { date: "2023-10-25", users: 1220 },
      { date: "2023-10-26", users: 1250 },
    ],
  },
  mostFrequentQueries: [
    "배송비 정책",
    "환불 절차",
    "영업 시간",
    "알파-V 모델 재고",
    "프로모션 코드 사용법",
  ],
  sentiment: {
    positive: 70,
    neutral: 20,
    negative: 10,
    data: [
      { name: "긍정", value: 70, fill: "var(--color-positive)" },
      { name: "중립", value: 20, fill: "var(--color-neutral)" },
      { name: "부정", value: 10, fill: "var(--color-negative)" },
    ],
  },
};

const dauChartConfig = {
  users: {
    label: "사용자 수",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const sentimentChartConfig = {
  value: {
    label: "비율",
  },
  긍정: {
    label: "긍정",
    color: "hsl(var(--chart-1))",
  },
  중립: {
    label: "중립",
    color: "hsl(var(--chart-2))",
  },
  부정: {
    label: "부정",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function AnalyticsPage({ params }: AnalyticsPageProps) {
  const { project_id } = use(params);

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">성능 분석: {project_id}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Customer Satisfaction */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              고객 만족도 (CSAT)
            </CardTitle>
            <Smile className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.customerSatisfaction}%
            </div>
            <p className="text-xs text-muted-foreground">지난 30일 기준</p>
          </CardContent>
        </Card>

        {/* Average Response Time */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              평균 응답 시간
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.avgResponseTime}초
            </div>
            <p className="text-xs text-muted-foreground">실시간 응답 기준</p>
          </CardContent>
        </Card>

        {/* Resolution Rate */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">문제 해결률</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.resolutionRate}%
            </div>
            <p className="text-xs text-muted-foreground">상담 완료 건 기준</p>
          </CardContent>
        </Card>

        {/* Daily Active Users */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>일일 활성 사용자 (DAU)</CardTitle>
            <CardDescription>
              지난 7일간 일일 활성 사용자 수 추이
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={dauChartConfig}
              className="h-[200px] w-full"
            >
              <LineChart data={analyticsData.dailyActiveUsers.history}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(5)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  dataKey="users"
                  type="monotone"
                  stroke="var(--color-users)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Sentiment Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>감성 분석</CardTitle>
            <CardDescription>대화의 긍정/부정/중립 비율</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={sentimentChartConfig}
              className="h-[200px] w-full"
            >
              <BarChart data={analyticsData.sentiment.data} layout="vertical">
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                />
                <XAxis type="number" hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" radius={4}></Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Most Frequent Queries */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>가장 빈번한 문의</CardTitle>
            <CardDescription>
              지난 7일간 가장 많이 들어온 문의 Top 5
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {analyticsData.mostFrequentQueries.map((query, index) => (
                <li key={index} className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>{query}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
