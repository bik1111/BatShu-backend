# <img width="40" alt="Union (1)"  src="https://github.com/BatShu/batshu-backend/assets/76617139/7b3816e7-7ed4-46ca-a0ea-ca86a9af2ca6">  BatShu

<img width="877" alt="스크린샷 2023-11-23 오후 5 48 15" src="https://github.com/BatShu/batshu-backend/assets/76617139/675b36f3-1ebc-407c-b603-88ab728bf4d8">


### 🔉 프로젝트 소개 
> 밧슈, 필요한 순간, 필요한 사람에게
>
> BatShu |  적절한 리워드를 제공하여 자발적인 영상 제보를 유도하고, 필요한 영상 자료를 요청하고 제보할 수 있는 영상 공유 & 거래 플랫폼
<br />


<img width="877" alt="스크린샷 2023-11-23 오후 5 42 42" src="https://github.com/BatShu/batshu-backend/assets/76617139/956847da-2a2f-4303-a431-eb2d729a1208">
<img width="877" alt="스크린샷 2023-11-23 오후 5 42 55" src="https://github.com/BatShu/batshu-backend/assets/76617139/9a4634a0-6109-4a34-bced-1f6ac3add003">
<img width="877" alt="스크린샷 2023-11-23 오후 5 43 13" src="https://github.com/BatShu/batshu-backend/assets/76617139/b3f09915-f357-4d28-b7b5-94e7095d2d84">
<img width="877" alt="스크린샷 2023-11-23 오후 5 43 25" src="https://github.com/BatShu/batshu-backend/assets/76617139/5d00e18a-f61f-4689-9a30-0f43b107bd70">
<img width="877" alt="스크린샷 2023-11-23 오후 5 41 14" src="https://github.com/BatShu/batshu-backend/assets/76617139/17165947-0c89-414c-97dd-c8a45734c1b7">
<img width="877" alt="스크린샷 2023-11-23 오후 5 41 32" src="https://github.com/BatShu/batshu-backend/assets/76617139/d2d934c4-03e4-48cc-80aa-4d6c071aabf1">


## Backend Tech Stack
![제목123없음-2023-11-23-1531](https://github.com/bik1111/BatShu-backend/assets/76617139/c208a564-d98a-4c31-96da-e9ad037453f3)

---


## Infra Structure
![제목 없음-2023-11-03-1124](https://github.com/bik1111/BatShu-backend/assets/76617139/33593e06-a78f-4a0c-9b9a-875ca0e028b8)


## HLS ENCODING FLOW MAP
<p align="center">
<img width="737" alt="스크린샷 2023-11-23 오후 3 53 57" src="https://github.com/bik1111/BatShu-backend/assets/76617139/7b11453b-3032-41e6-83bb-e90189712992">
</p>

<img width="625" alt="스크린샷 2023-11-23 오후 3 56 39" src="https://github.com/bik1111/BatShu-backend/assets/76617139/e3193cd7-d52d-42e2-b105-c23554b4dc0a">


## 📂 FOLDER STRUCTURE

```java
.
├── 📁 Repository
│ ├── 🚑 Accident
│ │ └── AccidentRepository.ts
│ ├── 📬 Message
│ │ └── MessageRepository.ts
│ ├── 🔍 Observe
│ │ └── ObserveRepository.ts
│ ├── 🏠 Room
│ │ └── RoomRepository.ts
│ └── 👤 User
│ └── UserRepository.ts
├── 🚀 app.ts
├── 🔐 auth
│ ├── auth.ts
│ └── firebase.ts
├── 💬 chat
│ ├── chatSocket.ts
│ └── test.html
├── ⚙️ config
│ ├── database.ts
│ └── network.ts
├── 🎮 controller
│ ├── 🚑 Accident
│ │ └── AccidentController.ts
│ ├── 📬 Message
│ │ └── MessageController.ts
│ ├── 🔍 Observe
│ │ └── ObserveController.ts
│ ├── 🏠 Room
│ │ └── RoomController.ts
│ └── 👤 User
│ └── UserController.ts
├── 🎨 domain
│ └── response.ts
├── 🌐 ecosystem.config.ts
├── 📚 interface
│ ├── accident.ts
│ ├── both.ts
│ ├── chat.ts
│ └── observe.ts
├── 🚦 routers
│ ├── 🚑 AccidentRouter.ts
│ ├── 📬 MessageRouter.ts
│ ├── 🔍 ObserveRouter.ts
│ ├── 🏠 RoomRouter.ts
│ └── 👤 UserRouter.ts
├── ⚙️ service
│ ├── 🚑 Accident
│ │ └── AccidentService.ts
│ ├── 📬 Message
│ │ └── MessageService.ts
│ ├── 🔍 Observe
│ │ └── ObserveService.ts
│ ├── 🏠 Room
│ │ └── RoomService.ts
│ └── 👤 User
│ └── UserService.ts
└── 🛠️ utils
└── aws-s3.ts
```
