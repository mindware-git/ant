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
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

interface MemoryPageProps {
  params: Promise<{
    project_id: string;
  }>;
}

interface Memory {
  id: string;
  text: string;
  timestamp: string;
}

// Mock data for memory entries
const mockMemories: Memory[] = [
  {
    id: "mem-1",
    text: "최근 '배송비 환불' 관련 문의가 급증하고 있음. 관련 규정을 다시 한 번 숙지하고, 고객에게는 명확하고 친절하게 안내할 것.",
    timestamp: "2023년 10월 27일 오전 11:30",
  },
  {
    id: "mem-2",
    text: "'프로모션 코드 중복 적용 불가' 방침에 대해 불만을 표현하는 고객이 있었음. 해당 고객에게는 별도의 10% 할인 쿠폰을 제공하여 이슈를 해결함.",
    timestamp: "2023년 10월 26일 오후 3:15",
  },
  {
    id: "mem-3",
    text: "신규 출시된 '알파-V' 모델의 재고가 부족하여 배송이 지연되고 있음. 고객 문의 시 예상 지연 기간을 솔직하게 안내하고 양해를 구할 것.",
    timestamp: "2023년 10월 25일 오전 9:00",
  },
];

export default function MemoryPage({ params }: MemoryPageProps) {
  const { project_id } = use(params);
  const [memories, setMemories] = useState<Memory[]>(mockMemories);
  const [newMemory, setNewMemory] = useState("");

  const handleSaveMemory = () => {
    if (newMemory.trim() === "") return;

    const newEntry: Memory = {
      id: `mem-${Date.now()}`,
      text: newMemory,
      timestamp: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    setMemories([newEntry, ...memories]);
    setNewMemory("");
    // In a real application, you would make an API call here to save the memory
    console.log(`New memory for project ${project_id} saved: ${newMemory}`);
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">프로젝트: {project_id}</h2>

      {/* Add New Memory */}
      <Card>
        <CardHeader>
          <CardTitle>새 메모리 추가</CardTitle>
          <CardDescription>
            최근 있었던 일, 주의해야 할 점, 문제 사례 등을 기록하여 에이전트의
            기억을 업데이트하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <textarea
            value={newMemory}
            onChange={(e) => setNewMemory(e.target.value)}
            placeholder="여기에 새로운 기억을 입력하세요..."
            className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-[120px]"
          />
          <Button onClick={handleSaveMemory} className="w-full">
            메모리 저장
          </Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Recent Memories */}
      <Card>
        <CardHeader>
          <CardTitle>최근 기록된 메모리</CardTitle>
          <CardDescription>최신순으로 정렬된 기억 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {memories.map((memory) => (
            <div key={memory.id} className="p-4 border rounded-lg bg-muted/50">
              <p className="text-muted-foreground mb-2">{memory.text}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>{memory.timestamp}</span>
              </div>
            </div>
          ))}
          {memories.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              기록된 메모리가 없습니다.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
