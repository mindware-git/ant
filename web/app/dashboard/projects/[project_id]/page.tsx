import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectPage({
  params,
}: {
  params: { project_id: string };
}) {
  return (
    <div className="space-y-8">
      {/* Demo Welcome Section */}
      <Card>
        <CardHeader>
          <CardTitle>🎉 데모 프로젝트에 오신 것을 환영합니다!</CardTitle>
          <CardDescription>
            실제 에이전트가 어떻게 작동하는지 체험해보세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            이 데모 프로젝트는 Agent, Rule, Memory 세 가지 코어 기능이 어떻게
            함께 작동하여 완벽한 에이전트 시스템을 구성하는지 보여줍니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">🤖 Agent</h3>
              <p className="text-sm">지능형 응답 생성</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">⚙️ Rule</h3>
              <p className="text-sm">비즈니스 로직 처리</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">🧠 Memory</h3>
              <p className="text-sm">학습 및 기억</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Demo Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>💬 챗봇 테스트</CardTitle>
            <CardDescription>
              실시간으로 에이전트와 대화해보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground">챗봇 인터페이스 (데모)</p>
            </div>
            <Button className="w-full mt-4">챗봇 시작하기</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📊 성능 분석</CardTitle>
            <CardDescription>에이전트의 성능 지표를 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span>응답 시간</span>
                <span className="font-semibold">1.2초</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span>정확도</span>
                <span className="font-semibold">94%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span>고객 만족도</span>
                <span className="font-semibold">4.8/5.0</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              상세 분석 보기
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Demo Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>⚙️ 에이전트 설정</CardTitle>
          <CardDescription>
            데모 에이전트의 설정을 확인하고 수정해보세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Agent 설정</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>모델</span>
                  <span className="text-muted-foreground">GPT-4</span>
                </div>
                <div className="flex justify-between">
                  <span>언어</span>
                  <span className="text-muted-foreground">한국어</span>
                </div>
                <div className="flex justify-between">
                  <span>톤</span>
                  <span className="text-muted-foreground">친절함</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Rule 설정</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>활성 규칙</span>
                  <span className="text-muted-foreground">12개</span>
                </div>
                <div className="flex justify-between">
                  <span>우선순위</span>
                  <span className="text-muted-foreground">보통</span>
                </div>
                <div className="flex justify-between">
                  <span>실행 모드</span>
                  <span className="text-muted-foreground">자동</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
