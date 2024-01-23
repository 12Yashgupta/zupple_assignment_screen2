# Blockchain Explorer Interface Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Components](#components)
   - [Blocks](#blocks)
   - [BlockDets](#blockdets)
   - [Transactions](#transactions)
5. [Responsiveness](#responsiveness)
6. [Usage](#usage)

## 1. Introduction <a name="introduction"></a>

This project is a blockchain explorer interface implemented using React.js. It displays blockchain data in a clear and concise manner, following the design files provided. The application consists of three main components: Blocks, BlockDets, and Transactions.

## 2. Installation <a name="installation"></a>

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application will be accessible at `http://localhost:3000` by default.

## 3. Project Structure <a name="project-structure"></a>

The project structure is organized as follows:

- `src/`
  - `components/`
    - `Blocks.js`
    - `BlockDets.js`
    - `Transactions.js`
  - `styles/`
    - `blocks.css`
    - `blockDets.css`
    - `transactions.css`
  - `App.js`
  - `index.js`
  
## 4. Components <a name="components"></a>

### a. Blocks (Blocks.js) <a name="blocks"></a>

- Displays a list of blocks with relevant information.
- Provides a scrollable section with a hide-scrollbar feature on mouse down.

### b. BlockDets (BlockDets.js) <a name="blockdets"></a>

- Displays detailed information about a specific block.
- Provides copy-to-clipboard functionality for the block hash.
- Shows a toast notification on successful copy.

### c. Transactions (Transactions.js) <a name="transactions"></a>

- Displays a paginated list of transactions.
- Supports navigation through transaction pages.
- Shows detailed information for each transaction, including sub-transaction details.

## 5. Responsiveness <a name="responsiveness"></a>

The application is designed to be responsive and accessible on various devices and browsers. The layout adjusts gracefully to different screen sizes to ensure a consistent user experience.

## 6. Usage <a name="usage"></a>

1. **Blocks Component:**
   - The `Blocks` component displays a scrollable list of blocks.
   - Mouse down on the block section to reveal a scrollbar.
   - Blocks are divided into left and right sections for better organization.

2. **BlockDets Component:**
   - The `BlockDets` component shows detailed information about a specific block.
   - Provides a copy-to-clipboard feature for the block hash.
   - Toast notifications appear on successful copy.

3. **Transactions Component:**
   - The `Transactions` component displays a paginated list of transactions.
   - Navigation buttons allow moving between transaction pages.
   - Detailed transaction information, including sub-transactions, is presented in a clear format.
     
## 7. Screenshots 

![image](https://github.com/punam01/screen2/assets/43836363/834e93fc-2b5b-41e5-a359-5cf872c54625)
![image](https://github.com/punam01/screen2/assets/43836363/bd8570b0-7e56-4fe8-a2e6-adf7d5e01014)
![image](https://github.com/punam01/screen2/assets/43836363/69b7bd03-f67c-40c5-9cf3-22994d9d4df5)
![image](https://github.com/punam01/screen2/assets/43836363/f9644381-6f16-4f42-b79b-0e0ab05e6bd3)

![image](https://github.com/punam01/screen2/assets/43836363/318336d6-a8f9-44f0-be32-22c2769935d4)
![image](https://github.com/punam01/screen2/assets/43836363/c0d48ef3-10b2-4555-8129-3d529c9495dc)
![image](https://github.com/punam01/screen2/assets/43836363/613c5b2c-1985-4003-b384-d08023da665a)




