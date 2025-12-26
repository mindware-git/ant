import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RulePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Rule</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          비즈니스 규칙 엔진
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          복잡한 비즈니스 로직을 시각적으로 정의하고 관리할 수 있습니다. 조건부
          로직, 워크플로우, 의사결정 규칙을 쉽게 구현할 수 있습니다.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          시작하기
        </Button>
      </div>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
          <p className="text-lg text-muted-foreground">
            Rule이 제공하는 핵심 기능들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>시각적 규칙 편집기</CardTitle>
              <CardDescription>드래그앤드롭 규칙 설계</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                코딩 없이 직관적인 드래그앤드롭 인터페이스로 복잡한 비즈니스
                규칙을 쉽게 설계할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>조건부 로직</CardTitle>
              <CardDescription>복잡한 조건 처리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                IF-THEN-ELSE, AND/OR 논리를 사용하여 복잡한 비즈니스 조건을
                정확하게 구현할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실시간 실행</CardTitle>
              <CardDescription>즉각적인 규칙 적용</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                정의된 규칙을 실시간으로 실행하여 즉각적인 의사결정과 응답을
                제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>버전 관리</CardTitle>
              <CardDescription>규칙 변경 이력 추적</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모든 규칙 변경 사항을 추적하고 이전 버전으로 쉽게 롤백할 수
                있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>테스트 및 디버깅</CardTitle>
              <CardDescription>규칙 검증 도구</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                다양한 시나리오로 규칙을 테스트하고 문제를 쉽게 디버깅할 수 있는
                도구를 제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>성능 모니터링</CardTitle>
              <CardDescription>규칙 실행 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                각 규칙의 실행 시간, 성공률, 리소스 사용량 등 상세한 성능 지표를
                모니터링합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
