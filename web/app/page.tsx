import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          에이전트가 어떻게 생각하고 행동할지 설계하세요
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Chatbot, Voicebot 등 고객의 모든 요청사항을 응답하는 Agent를 쉽게 만들
          수 있습니다
        </p>
        <Button size="lg" className="text-lg px-8 py-6" asChild>
          <Link href="/dashboard/projects/demo_project_id">Request Demo</Link>
        </Button>
      </div>

      {/* Core Products Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">코어 제품</h2>
          <p className="text-lg text-muted-foreground">
            에이전트 개발을 위한 핵심 기능들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent</CardTitle>
              <CardDescription>지능형 에이전트 생성 및 관리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자의 요구사항을 정확히 이해하고 응답하는 지능형 에이전트를
                쉽게 만들고 관리할 수 있습니다. 다양한 채널과 통합되어 원활한
                커뮤니케이션을 제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rule</CardTitle>
              <CardDescription>비즈니스 규칙 엔진</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                복잡한 비즈니스 로직을 시각적으로 정의하고 관리할 수 있습니다.
                조건부 로직, 워크플로우, 의사결정 규칙을 쉽게 구현할 수
                있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Memory</CardTitle>
              <CardDescription>지속적인 학습 및 기억</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                대화 기록과 사용자 데이터를 기반으로 에이전트가 지속적으로
                학습하고 개선됩니다. 개인화된 경험을 제공하기 위한 스마트 메모리
                시스템입니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">고객 성공 사례</h2>
          <p className="text-lg text-muted-foreground">
            실제 비즈니스에서 에이전트 기술이 만드는 변화
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🍔</span>
                맥도날드
              </CardTitle>
              <CardDescription>스마트 주문 및 개인화된 경험</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                    📈 응답 시간 50% 단축
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  키오스크 음성 주문 에이전트로 고객이 원하는 메뉴를 자연어로
                  주문할 수 있습니다. 이전 주문 기록을 기반으로 개인화된 메뉴를
                  추천하고 프로모션을 자동으로 적용합니다.
                </p>
                <div className="text-xs text-muted-foreground border-t pt-2">
                  <strong>적용 기술:</strong> Agent + Memory + Rule
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">☕</span>
                스타벅스
              </CardTitle>
              <CardDescription>모바일 커피 경험 혁신</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                    📈 주문 완료율 35% 향상
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  모바일 앱 챗봇이 고객의 취향을 학습하여 맞춤형 음료를
                  추천합니다. 리워드 프로그램과 연동되어 자동으로 스탬프를
                  적용하고 매장 재고를 실시간으로 확인합니다.
                </p>
                <div className="text-xs text-muted-foreground border-t pt-2">
                  <strong>적용 기술:</strong> Agent + Memory + Rule
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎧</span>
                금융 고객센터
              </CardTitle>
              <CardDescription>24/7 지능형 고객 지원</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                    📈 운영 비용 40% 절감
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  복잡한 금융 문의를 자동으로 분류하고 1차 응답을 제공합니다.
                  고객의 금융 거래 내역을 안전하게 기억하고 개인화된 재무 상담을
                  실시간으로 제공합니다.
                </p>
                <div className="text-xs text-muted-foreground border-t pt-2">
                  <strong>적용 기술:</strong> Agent + Memory + Rule
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
