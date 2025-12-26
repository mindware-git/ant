"use client";

import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TestPageProps {
  params: Promise<{
    project_id: string;
  }>;
}

type Tab = "single" | "test-set";

// Mock data for test set results
const mockTestSetResults = [
  {
    id: 1,
    input: "배송비 환불 정책 알려주세요.",
    expected: "배송비 환불은...",
    actual: "배송비 환불은...",
    pass: true,
  },
  {
    id: 2,
    input: "알파-V 모델 재고 있나요?",
    expected: "현재 재고가...",
    actual: "네, 재고 있습니다.",
    pass: false,
  },
  {
    id: 3,
    input: "가장 인기 있는 상품은 무엇인가요?",
    expected: "현재 가장 인기...",
    actual: "현재 가장 인기...",
    pass: true,
  },
];

export default function TestPage({ params }: TestPageProps) {
  const { project_id } = use(params);
  const [activeTab, setActiveTab] = useState<Tab>("single");
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState<
    { user: string; agent: string }[]
  >([]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Simulate agent response
    const userMessage = inputValue;
    const agentResponse = `"${userMessage}"에 대한 에이전트의 응답입니다.`;

    setConversation([
      ...conversation,
      { user: userMessage, agent: agentResponse },
    ]);
    setInputValue("");
  };

  const SingleInputTest = () => (
    <Card>
      <CardHeader>
        <CardTitle>실시간 테스트</CardTitle>
        <CardDescription>
          에이전트에게 메시지를 보내고 실시간으로 응답을 확인합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-80 overflow-y-auto p-4 border rounded-md bg-muted/50 space-y-4">
          {conversation.map((msg, index) => (
            <div key={index} className="space-y-2">
              <p>
                <span className="font-bold">You:</span> {msg.user}
              </p>
              <p>
                <span className="font-bold">Agent:</span> {msg.agent}
              </p>
            </div>
          ))}
          {conversation.length === 0 && (
            <p className="text-muted-foreground text-center">
              대화를 시작해보세요.
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="메시지를 입력하세요..."
          />
          <Button onClick={handleSendMessage}>전송</Button>
        </div>
      </CardContent>
    </Card>
  );

  const TestSetRun = () => (
    <Card>
      <CardHeader>
        <CardTitle>테스트 세트 실행</CardTitle>
        <CardDescription>
          준비된 테스트 세트 파일을 업로드하여 에이전트의 성능을 일괄적으로
          평가합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input type="file" />
          <Button>실행</Button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">실행 결과:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Input
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expected
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actual
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockTestSetResults.map((result) => (
                  <tr key={result.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {result.input}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {result.expected}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {result.actual}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={cn(
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          result.pass
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800",
                        )}
                      >
                        {result.pass ? "Pass" : "Fail"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">테스트 환경: {project_id}</h2>
      <div className="flex gap-2 border-b">
        <Button
          variant={activeTab === "single" ? "default" : "ghost"}
          onClick={() => setActiveTab("single")}
        >
          실시간 테스트
        </Button>
        <Button
          variant={activeTab === "test-set" ? "default" : "ghost"}
          onClick={() => setActiveTab("test-set")}
        >
          테스트 세트
        </Button>
      </div>

      {activeTab === "single" ? <SingleInputTest /> : <TestSetRun />}
    </div>
  );
}
