"use client";

import { useState, use, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { File, Trash2, UploadCloud } from "lucide-react";

interface RulePageProps {
  params: Promise<{
    project_id: string;
  }>;
}

// Mock data for rule templates
const mockTemplates = [
  {
    id: "template-1",
    title: "친절한 상담사",
    text: "당신은 고객의 요청사항을 듣고 해결해주는 친절한 상담사입니다. 항상 상냥하고 상세하게 설명해주세요.",
  },
  {
    id: "template-2",
    title: "기술 지원 전문가",
    text: "You are a technical support expert. Provide clear, step-by-step instructions. Be concise and accurate.",
  },
  {
    id: "template-3",
    title: "상품 추천 봇",
    text: "고객의 취향과 이전 구매 기록을 바탕으로 상품을 추천하는 봇입니다. 세일 정보나 신상품 정보를 함께 제공해주세요.",
  },
];

const defaultRule = "당신은 고객의 요청사항을 듣고 해결해주는 상담사입니다.";

// Mock data for files
const mockFiles = [
  {
    name: "product_manual.pdf",
    size: 2.5 * 1024 * 1024,
    type: "application/pdf",
  },
  { name: "faq.txt", size: 128 * 1024, type: "text/plain" },
];

export default function RulePage({ params }: RulePageProps) {
  const { project_id } = use(params);
  const [currentRule, setCurrentRule] = useState(defaultRule);
  const [customRule, setCustomRule] = useState("");
  const [files, setFiles] = useState(mockFiles);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSelectTemplate = (templateText: string) => {
    setCurrentRule(templateText);
    setCustomRule(templateText); // Also update the textarea
  };

  const handleSaveCustomRule = () => {
    setCurrentRule(customRule);
    // In a real application, you would make an API call here to save the rule for the project
    console.log(`Rule for project ${project_id} updated to: ${customRule}`);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      setFiles([
        ...files,
        {
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type,
        },
      ]);
      setSelectedFile(null); // Reset file input
      // In a real application, you would handle the file upload to the server here
      console.log(
        `Uploading file ${selectedFile.name} for project ${project_id}`,
      );
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName));
    // In a real application, you would make an API call here to delete the file
    console.log(`Deleting file ${fileName} for project ${project_id}`);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">프로젝트: {project_id}</h2>

      {/* Currently Active Rule */}
      <Card>
        <CardHeader>
          <CardTitle>현재 적용된 규칙</CardTitle>
          <CardDescription>
            이 프로젝트의 에이전트가 따르는 현재 시스템 규칙입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground p-4 bg-muted rounded-lg">
            {currentRule}
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Knowledge Base */}
      <Card>
        <CardHeader>
          <CardTitle>지식 베이스</CardTitle>
          <CardDescription>
            규칙의 기반이 될 자료들을 관리합니다. (RAG)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">파일 업로드</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="file"
                onChange={handleFileChange}
                className="flex-grow"
              />
              <Button
                onClick={handleFileUpload}
                disabled={!selectedFile}
                className="shrink-0"
              >
                <UploadCloud className="mr-2 h-4 w-4" />
                업로드
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">업로드된 파일</h3>
            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-3 border rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <File className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteFile(file.name)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
              {files.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  업로드된 파일이 없습니다.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Rule Templates */}
      <Card>
        <CardHeader>
          <CardTitle>규칙 템플릿</CardTitle>
          <CardDescription>
            미리 작성된 템플릿을 선택하여 규칙을 빠르게 설정할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {mockTemplates.map((template) => (
            <div
              key={template.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
            >
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">{template.title}</h4>
                <p className="text-sm text-muted-foreground">{template.text}</p>
              </div>
              <Button
                onClick={() => handleSelectTemplate(template.text)}
                className="mt-3 md:mt-0 md:ml-4"
                variant="outline"
              >
                선택
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Custom Rule */}
      <Card>
        <CardHeader>
          <CardTitle>직접 작성</CardTitle>
          <CardDescription>
            에이전트가 따라야 할 규칙을 자유롭게 작성하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <textarea
            value={customRule}
            onChange={(e) => setCustomRule(e.target.value)}
            placeholder="예: 당신은 고객의 요청사항을 듣고 해결해주는 상담사입니다."
            className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-[120px]"
          />
          <Button onClick={handleSaveCustomRule} className="w-full">
            사용자 정의 규칙 저장
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
