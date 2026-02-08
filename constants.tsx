
import React from 'react';
import { Bot, Cpu, Zap, Lightbulb, BookOpen, Layers } from 'lucide-react';
import { Service, Strength, Experience } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "생성형 AI 실무 워크숍",
    description: "프롬프트 엔지니어링 및 AI 툴 활용 능력 강화 교육. 현장에서 바로 쓸 수 있는 실전 노하우를 전달합니다.",
    icon: "Bot"
  },
  {
    id: 2,
    title: "AI 기반 업무 자동화 컨설팅",
    description: "노코드 툴과 AI를 결합한 스마트 워크플레이스 구축. 복잡한 워크플로우를 최적화합니다.",
    icon: "Zap"
  },
  {
    id: 3,
    title: "AI 리터러시 강연",
    description: "비전공자도 쉽게 이해하는 인공지능 기술의 현재와 미래. 기술의 본질을 꿰뚫는 통찰력을 제공합니다.",
    icon: "BookOpen"
  },
  {
    id: 4,
    title: "기업 맞춤형 AI 가이드라인",
    description: "효율적이고 안전한 AI 도입을 위한 전략 수립 및 규정 가이드 제시. 기업의 가치를 보호합니다.",
    icon: "Layers"
  }
];

export const STRENGTHS: Strength[] = [
  {
    id: 1,
    label: "기술의 일상화",
    description: "복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환하는 능력"
  },
  {
    id: 2,
    label: "실전형 커리큘럼",
    description: "이론을 넘어 즉각적인 결과물을 만들어내는 핸즈온(Hands-on) 중심 강의"
  },
  {
    id: 3,
    label: "트렌드 분석력",
    description: "급변하는 AI 생태계에서 핵심 도구를 선별하고 적용하는 통찰력"
  },
  {
    id: 4,
    label: "솔루션 중심 접근",
    description: "클라이언트의 업무 현장에 즉시 도입 가능한 실용적인 AI 해결책 제시"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "생성형 AI 실무 교육 전문가",
    detail: "다양한 기업 및 기관 대상 AI 툴(제미나이, 챗GPT 등) 활용 강의 수행"
  },
  {
    id: 2,
    role: "AI 도입 전략 수석 컨설턴트",
    detail: "조직 내 업무 효율 극대화를 위한 AI 워크플로우 설계"
  },
  {
    id: 3,
    role: "AI 커뮤니티 및 콘텐츠 디렉터",
    detail: "최신 AI 기술 동향 분석 및 실무 적용 사례 전파"
  }
];
