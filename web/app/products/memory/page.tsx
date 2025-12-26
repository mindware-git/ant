import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MemoryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Memory</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          지속적인 학습 및 기억
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          대화 기록과 사용자 데이터를 기반으로 에이전트가 지속적으로 학습하고
          개선됩니다. 개인화된 경험을 제공하기 위한 스마트 메모리 시스템입니다.
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
            Memory가 제공하는 핵심 기능들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>장기 기억</CardTitle>
              <CardDescription>지속적인 데이터 저장</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자와의 모든 상호작용을 안전하게 저장하고 필요할 때 즉시
                검색할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>컨텍스트 이해</CardTitle>
              <CardDescription>대화 맥락 파악</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                이전 대화 내용을 기반으로 현재 맥락을 정확하게 이해하고 일관된
                응답을 제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>개인화</CardTitle>
              <CardDescription>사용자 맞춤형 경험</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자의 선호도, 패턴, 역사를 학습하여 개인화된 응답과 서비스를
                제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>자동 학습</CardTitle>
              <CardDescription>지능적인 패턴 인식</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자 상호작용 패턴을 자동으로 분석하고 학습하여 에이전트의
                지능을 지속적으로 향상시킵니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>데이터 암호화</CardTitle>
              <CardDescription>보안 정보 관리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모든 사용자 데이터를 최고 수준의 암호화로 보호하고 개인정보보호
                규정을 준수합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>메모리 최적화</CardTitle>
              <CardDescription>효율적인 데이터 관리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                스마트 데이터 압축과 인덱싱 기술로 저장 공간을 최적화하고 검색
                속도를 향상시킵니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
