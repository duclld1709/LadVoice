## 🔍 Tổng quan Dự án: **LadVoice – Hệ thống Phỏng vấn Giả lập AI (Full Spring Boot)**

**LadVoice** là một ứng dụng **AI Mock Interview System** full stack, được thiết kế để giúp người dùng luyện tập phỏng vấn theo thời gian thực với trợ lý AI có giọng nói tự nhiên.
Phiên bản này sử dụng **Spring Boot** làm backend chính và **Next.js** làm frontend, kết hợp các API AI (Gemini, Vapi) để tạo ra trải nghiệm phỏng vấn giả lập toàn diện.

---

### 🎯 Mục tiêu Dự án

* Xây dựng hệ thống **phỏng vấn giả lập AI** giúp người dùng rèn luyện kỹ năng trả lời phỏng vấn.
* Tận dụng AI để **tạo câu hỏi, đánh giá phản hồi, và cung cấp feedback chi tiết**.
* Ứng dụng mô hình **client-server hiện đại**: Frontend (Next.js) + Backend (Spring Boot REST API).
* Tăng cường kỹ năng full stack cho sinh viên AI: tích hợp LLM, backend RESTful, frontend UI/UX, và triển khai thực tế.

---

### ⚙️ Kiến trúc Hệ thống

```
Next.js (Frontend)
      ↓  REST API / SSE
Spring Boot 3 (Backend)
      ↓
PostgreSQL (Database)
      ↓
Gemini API + Vapi (AI Services)
```

---

### 🧱 Công nghệ Sử dụng

| Lĩnh vực             | Công nghệ                                                               |
| -------------------- | ----------------------------------------------------------------------- |
| **Frontend**         | Next.js 15, React 19, Tailwind CSS, Shadcn UI                           |
| **Backend**          | Spring Boot 3, Spring Security (JWT), Spring Data JPA, MapStruct        |
| **Database**         | PostgreSQL + Flyway Migration                                           |
| **AI Integration**   | Google Gemini API (tạo câu hỏi, feedback), Vapi (voice agent real-time) |
| **Realtime / Async** | Server-Sent Events (SSE)                                                |
| **DevOps**           | Docker, OpenAPI, Swagger UI, Render/Fly.io Deployment                   |
| **Testing**          | JUnit 5, Testcontainers                                                 |
| **Utilities**        | Lombok, Jackson, Validation (Jakarta)                                   |

---

### 🧩 Cấu trúc Domain Chính

* **User**: Thông tin đăng ký và xác thực người dùng (JWT, roles).
* **Interview**: Phiên phỏng vấn, chứa thông tin vai trò, công nghệ, cấp độ.
* **Question / Answer**: Các câu hỏi được tạo bởi Gemini và câu trả lời từ người dùng.
* **Feedback**: Kết quả phân tích tự động của AI sau phỏng vấn.
* **Event**: Log các sự kiện cuộc gọi từ Vapi (bắt đầu, kết thúc, transcript).

---

### 🚀 API Chính

| Endpoint                           | Mô tả                                            |
| ---------------------------------- | ------------------------------------------------ |
| `POST /auth/signup`, `/auth/login` | Đăng ký, đăng nhập và nhận JWT                   |
| `POST /interviews`                 | Tạo phiên phỏng vấn (gọi Gemini để sinh câu hỏi) |
| `GET /interviews`                  | Lấy danh sách phỏng vấn của người dùng           |
| `GET /interviews/{id}`             | Lấy chi tiết phỏng vấn                           |
| `POST /interviews/{id}/answers`    | Gửi câu trả lời                                  |
| `POST /interviews/{id}/feedback`   | Gọi Gemini để sinh phản hồi                      |
| `POST /webhooks/vapi`              | Nhận dữ liệu sự kiện từ Vapi (transcript/audio)  |
| `GET /interviews/{id}/stream`      | SSE: truyền trạng thái realtime về client        |

---

### 📆 Lộ Trình Phát Triển (6 Giai đoạn)

| Giai đoạn | Nội dung                                            |
| --------- | --------------------------------------------------- |
| **1.**    | Xây dựng mô hình dữ liệu, Spring Security + JWT     |
| **2.**    | CRUD `User` và `Interview` + xác thực frontend      |
| **3.**    | Tích hợp Gemini API để sinh câu hỏi phỏng vấn       |
| **4.**    | Webhook từ Vapi + lưu transcript                    |
| **5.**    | API feedback (Gemini generateObject) + SSE realtime |
| **6.**    | Testing, Docker hóa, triển khai lên Render/Vercel   |

---

### 🎓 Kết quả Mong đợi

* Một **ứng dụng full-stack hoàn chỉnh** có thể demo và ghi vào portfolio.
* Nắm vững quy trình phát triển thực tế: thiết kế REST API, xác thực, kết nối LLM, xử lý realtime và triển khai.
* Tăng cường khả năng **phân tích – thiết kế – tích hợp AI vào hệ thống phần mềm**.

---

**LadVoice (Full Spring Boot)** không chỉ là dự án học tập, mà còn là bước đệm giúp sinh viên AI hiểu toàn cảnh vòng đời phát triển ứng dụng hiện đại — từ frontend UI đến backend API và tích hợp trí tuệ nhân tạo thực tiễn.

### Với ban đầu dùng Firebase

* **Firebase Auth →** Spring Security (JWT)
* **Firestore →** PostgreSQL + Spring Data JPA (Flyway migration)
* **Firebase Admin / Server Actions / API routes (Next.js) →** REST API Spring Boot
* **Realtime nhỏ (nếu có) →** SSE/WebSocket Spring
* **Vercel deploy API →** Docker + Render/Fly.io/Cloud Run (hoặc server riêng)

### Với sử dụng SpringBoot

* **tRPC router →** REST API Spring
* **Drizzle ORM →** Spring Data JPA/QueryDSL
* **Better Auth →** Spring Security (JWT/OAuth2 login Google/GitHub)
* **Neon PostgreSQL (DB) →** vẫn dùng Postgres, chỉ đổi ORM/driver
* **Background jobs (Ingest) →** Spring Scheduling/Quartz/Celery-equivalent (Spring)
* **Webhooks (Stream/OpenAI) →** Controller Spring

👉 Nói cách khác, Spring Boot thay phần **API, auth, data access, background jobs, realtime**, còn **frontend (Next.js), Vapi, Gemini, Stream** và **PostgreSQL** vẫn giữ, chỉ đổi cách tích hợp.
