// src/data/userData.ts

import { UserObject } from "../utils/interfaces";

export const userData: UserObject = {
  success: true,
  user: {
    about: {
      name: "Luan Pizzo",
      title: "Creative Designer",
      subTitle: "Transforming Ideas into Visual Stories",
      description: "Designer com mais de 500 clientes atendidos, especializado nas principais ferramentas de design para entregar resultados excepcionais.",
      quote: "Criatividade e profissionalismo para cada projeto",
      exp_year: "5",
      address: "São Paulo, SP, Brasil",
      some_total: "500+ clientes atendidos",
      phoneNumber: "11 91234-5678",
      avatar: {
        public_id: "avatar123",
        url: "/luan.png",
        _id: "unique-avatar-id"
      },
      alternateAvatars: []
    },
    _id: "user-unique-id",
    username: "LuanPizzoDesign",
    email: "luanpizzo.design@gmail.com",
    role: "Designer",
    timeline: [
      {
        company_name: "Agência de Design X",
        summary: "Atuação como designer líder em projetos de branding e design visual.",
        sequence: 1,
        startDate: "2019-05-01",
        endDate: "2023-05-01",
        jobTitle: "Designer Líder",
        jobLocation: "São Paulo",
        bulletPoints: ["Gestão de equipe de design", "Criação de identidade visual"],
        forEducation: false,
        enabled: true,
        _id: "timeline-id"
      }
    ],
    skills: [
      {
        enabled: true,
        name: "Adobe Photoshop",
        sequence: 1,
        percentage: 95,
        image: {
          public_id: "photoshop-icon",
          url: "/photoshop.jpg",
          _id: "skill-image-id"
        },
        _id: "skill-id"
      },
      {
        enabled: true,
        name: "Adobe Illustrator",
        sequence: 2,
        percentage: 90,
        image: {
          public_id: "illustrator-icon",
          url: "/illustrator.jpg",
          _id: "skill-image-id"
        },
        _id: "skill-id"
      }
    ],
    youtube: [],
    projects: Array.from({ length: 39 }, (_, index) => ({
      liveurl: `/IMG-20241026-WA00${String(index + 8).padStart(2, '0')}.jpg`,
      githuburl: "",
      title: `Projeto ${index + 1}`,
      sequence: index + 1,
      image: {
        public_id: `IMG-20241026-WA00${String(index + 8).padStart(2, '0')}`,
        url: `/IMG-20241026-WA00${String(index + 8).padStart(2, '0')}.jpg`
      },
      description: "Descrição do projeto focado em design visual",
      techStack: ["Adobe Photoshop", "Illustrator", "Figma"],
      _id: `project-id-${index + 1}`,
      enabled: true
    })),
    social_handles: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/luan-pizzo",
        image: {
          public_id: "linkedin-icon",
          url: "/linkedin.jpg"
        },
        enabled: true,
        _id: "social-id"
      }
    ],
    services: [
        {
          name: "Design Gráfico",
          charge: "R$150/h",
          desc: "Criação de peças gráficas personalizadas para diversas plataformas.",
          enabled: true,
          _id: "service-id-1",
          image: {
            public_id: "graphic-design-service",
            url: "/graphic-design.jpg"
          }
        },
        {
          name: "Design de Interface (UI/UX)",
          charge: "R$200/h",
          desc: "Design de interfaces intuitivas e centradas na experiência do usuário.",
          enabled: true,
          _id: "service-id-2",
          image: {
            public_id: "ui-ux-design-service",
            url: "/ui-ux-design.jpg"
          }
        },
        {
          name: "Branding e Identidade Visual",
          charge: "R$300/h",
          desc: "Desenvolvimento de identidades visuais fortes e consistentes.",
          enabled: true,
          _id: "service-id-3",
          image: {
            public_id: "branding-service",
            url: "/branding.jpg"
          }
        },
        {
          name: "Ilustração Digital",
          charge: "R$180/h",
          desc: "Criação de ilustrações digitais personalizadas para projetos variados.",
          enabled: true,
          _id: "service-id-4",
          image: {
            public_id: "digital-illustration-service",
            url: "/digital-illustration.jpg"
          }
        }
      ],
      testimonials: [
        {
          image: {
            public_id: "testimonial-img-1",
            url: "/testimonial1.jpg"
          },
          name: "Mariana Souza",
          review: "Luan é um profissional incrível, atencioso e muito criativo.",
          position: "Cliente",
          enabled: true,
          _id: "testimonial-id-1"
        },
        {
          image: {
            public_id: "testimonial-img-2",
            url: "/testimonial2.jpg"
          },
          name: "Carlos Pereira",
          review: "Trabalhar com o Luan foi uma experiência excepcional. Altamente recomendado!",
          position: "Diretor de Arte",
          enabled: true,
          _id: "testimonial-id-2"
        },
        {
          image: {
            public_id: "testimonial-img-3",
            url: "/testimonial3.jpg"
          },
          name: "Fernanda Lima",
          review: "Ele conseguiu transformar nossa visão em realidade de maneira brilhante.",
          position: "CEO de Startup",
          enabled: true,
          _id: "testimonial-id-3"
        },
        {
          image: {
            public_id: "testimonial-img-4",
            url: "/testimonial4.jpg"
          },
          name: "João Henrique",
          review: "Profissionalismo e atenção aos detalhes definem o trabalho de Luan.",
          position: "Gerente de Marketing",
          enabled: true,
          _id: "testimonial-id-4"
        }
      ],
    createdAt: "2024-01-01",
    updatedAt: "2024-10-01",
    refreshToken: "some-refresh-token"
  }
};
