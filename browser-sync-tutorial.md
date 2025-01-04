# How to Use Browser Sync for Live-Reloading

Browser Sync is a tool that enhances the web development process by providing live-reloading and synchronization across multiple devices. Follow these steps to set up and use Browser Sync effectively.

## Step 1: Install Node.js and Browser Sync

Before you start using Browser Sync, you need to have Node.js and npm (Node Package Manager) installed on your system.

1. **Install Node.js**  
   Node.js is required for Browser Sync as it runs as a Node.js application. Here’s how to install it:  
   - Visit the official Node.js website: https://nodejs.org/  
   - Download the LTS (Long Term Support) version for your operating system. The LTS version is stable and recommended for most users.  
   - Install Node.js by following the instructions based on your operating system:  
     - **macOS**: Double-click the downloaded `.pkg` file and follow the prompts.  
     - **Windows**: Run the `.msi` installer and complete the setup wizard.  
     - **Linux**: Use your system’s package manager (e.g., `apt`, `yum`) or follow the instructions provided on the Node.js website.  
   - Verify that Node.js and npm are installed by running the following commands in your terminal:  
     ```
     node -v
     npm -v
     ```

2. **Install Browser Sync**  
   Once Node.js is installed, you can install Browser Sync globally using npm:  
   - Open your terminal and run the following command:  
     ```
     npm install -g browser-sync
     ```  
     The `-g` flag installs Browser Sync globally, making it accessible in any project.  

   - Verify the installation by running the following command:  
     ```
     browser-sync --version
     ```  
     This will display the installed version of Browser Sync, confirming it has been successfully installed.
