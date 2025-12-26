import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AgentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Agent</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          지능형 에이전트 생성 및 관리
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          사용자의 요구사항을 정확히 이해하고 응답하는 지능형 에이전트를 쉽게
          만들고 관리할 수 있습니다. 다양한 채널과 통합되어 원활한
          커뮤니케이션을 제공합니다.
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
            Agent가 제공하는 핵심 기능들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>자연어 처리</CardTitle>
              <CardDescription>고급 NLP 기반 이해</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                최신 자연어 처리 기술을 통해 사용자의 의도를 정확하게 파악하고
                문맥에 맞는 응답을 생성합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>멀티채널 통합</CardTitle>
              <CardDescription>다양한 플랫폼 연동</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                웹챗, 카카오톡, 라인, 슬랙 등 다양한 채널에 에이전트를 쉽게
                연동할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실시간 학습</CardTitle>
              <CardDescription>지속적인 성능 개선</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                사용자와의 상호작용을 통해 지속적으로 학습하고 응답 품질을
                개선합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>커스터마이징</CardTitle>
              <CardDescription>비즈니스에 맞는 설정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                브랜드 톤앤매너, 응답 스타일 등 비즈니스 요구사항에 맞게
                에이전트를 설정할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>분석 대시보드</CardTitle>
              <CardDescription>성능 모니터링</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                실시간 성능 지표, 사용자 만족도, 응답 시간 등 상세한 분석을
                제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 연동</CardTitle>
              <CardDescription>외부 시스템 연결</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                기존 비즈니스 시스템과 API를 통해 연동하여 완벽한 통합 솔루션을
                제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
