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

interface AgentPageProps {
  params: Promise<{
    project_id: string;
  }>;
}

// Mock data for models
const mockModels = [
  {
    id: "model-1",
    name: "GPT-4o",
    description: "OpenAI의 최신 대규모 언어 모델",
    provider: "OpenAI",
  },
  {
    id: "model-2",
    name: "Gemini 1.5 Flash",
    description: "Google의 빠르고 효율적인 멀티모달 모델",
    provider: "Google",
  },
  {
    id: "model-3",
    name: "Claude 3 Opus",
    description: "Anthropic의 가장 강력한 모델",
    provider: "Anthropic",
  },
  {
    id: "model-4",
    name: "Llama 3",
    description: "Meta의 오픈소스 대규모 언어 모델",
    provider: "Meta",
  },
];

export default function AgentPage({ params }: AgentPageProps) {
  const { project_id } = use(params);

  // Find the initial selected model based on mock data (e.g., GPT-4o as default)
  const initialSelectedModel =
    mockModels.find((model) => model.id === "model-1") || mockModels[0];

  const [currentSelectedModel, setCurrentSelectedModel] =
    useState(initialSelectedModel);

  const handleSelectModel = (modelId: string) => {
    const newModel = mockModels.find((model) => model.id === modelId);
    if (newModel) {
      setCurrentSelectedModel(newModel);
      // In a real application, you would make an API call here to update the project's model
      console.log(
        `Model for project ${project_id} updated to: ${newModel.name}`,
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">프로젝트: {project_id}</h2>

      {/* Currently Selected Model */}
      <Card>
        <CardHeader>
          <CardTitle>현재 선택된 모델</CardTitle>
          <CardDescription>
            이 프로젝트에 현재 적용 중인 AI 모델입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{currentSelectedModel.name}</h3>
            <span className="text-sm text-muted-foreground">
              {currentSelectedModel.provider}
            </span>
          </div>
          <p className="text-muted-foreground">
            {currentSelectedModel.description}
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Candidate Models */}
      <Card>
        <CardHeader>
          <CardTitle>후보 모델</CardTitle>
          <CardDescription>
            이 프로젝트에 적용할 수 있는 다른 AI 모델들입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {mockModels
            .filter((model) => model.id !== currentSelectedModel.id)
            .map((model) => (
              <div
                key={model.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">{model.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {model.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    제공자: {model.provider}
                  </span>
                </div>
                <Button
                  onClick={() => handleSelectModel(model.id)}
                  className="mt-3 md:mt-0 md:ml-4"
                  variant="outline"
                >
                  선택
                </Button>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
