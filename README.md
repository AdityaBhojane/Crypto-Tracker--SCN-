# Coin Market Dashboard

This project is a **modern and responsive** coin market dashboard that displays cryptocurrency details like market capitalization, volume, and price. It is built using **ShadCN UI** for sleek and consistent components, supporting both **light and dark modes**. The dashboard also features pagination for easy navigation and **bar charts** to represent market data.

## Table of Contents

- [Features](#features)
  - [ShadCN UI Integration](#shadcn-ui-integration)
  - [Light and Dark Mode](#light-and-dark-mode)
  - [Pagination](#pagination)
  - [Bar Charts](#bar-charts)
  - [Coin Market Details](#coin-market-details)
  - [Currency Filter](#currency-filter)
  - [Search Implementation (Coming Soon)](#search-implementation-coming-soon)
- [Tech Stack](#tech-stack)
- [Screen Shots - Images](#images)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)



## Features

### ShadCN UI Integration
- The UI is built using **ShadCN**, a customizable component library, ensuring a modern, clean, and visually appealing interface.

### Light and Dark Mode
- Full support for both **light mode** and **dark mode**. Users can easily toggle between the two themes for the best viewing experience.

### Pagination
- Implements pagination for seamless navigation through large datasets, making it user-friendly and scalable.

### Bar Charts
- The market data, such as market capitalization and volume, is visualized using **Bar Charts** to make data analysis more intuitive and interactive.

### Coin Market Details
- Fetches and displays detailed coin market information such as prices, market cap, and volume, providing users with up-to-date insights into the cryptocurrency market.

### Currency Filter
- Supports filtering the displayed coin data by currency, allowing users to view data in their preferred denomination.

### Search Implementation (Coming Soon)
- Search functionality will be implemented soon, allowing users to quickly find coins of interest.

## Tech Stack
- **React** (Next.js framework)
- **TypeScript** for type-safe development
- **ShadCN UI** for UI components
- **Recharts** for data visualization (bar charts)
- **Zustand** for state management
- **React Query** for data fetching and caching

## Getting Started

### Prerequisites
- **Node.js** and **npm** should be installed.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

   npm i 

   npm run dev
    ```

## Folder Structure

```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Chart.tsx
│   │   ├── Pagination.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── pages
│   │   ├── CoinDetailsPage
│   │   │   └── CoinDetails.tsx
│   ├── utils
│   │   └── GetChartData.ts
│   ├── zustandStore
│   │   └── store.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Images

1) Home (light mode)
![alt text](<Sample-images/Screenshot 2024-10-17 130556.png>)
2) Home (dark mode)
![alt text](<Sample-images/Screenshot 2024-10-17 130610.png>)
3) Details (light mode)
![alt text](<Sample-images/Screenshot 2024-10-17 130646.png>)
4) Details (dark mode)
![alt text](<Sample-images/Screenshot 2024-10-17 130634.png>)
5) Bar Chart
![alt text](<Sample-images/Screenshot 2024-10-17 130658.png>)

### Explanation:
- **Table of Contents**: Provides quick navigation to different sections, making it easier for recruiters to find relevant information.
- **Clear Headings and Subheadings**: Each feature and section is clearly labeled for easy scanning.
- **Code Blocks**: Installation instructions and commands are enclosed in code blocks for clarity.
  
Feel free to replace `<repository-url>` with the actual URL of your repository!
