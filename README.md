## Steps to Add a Member List and Set Up the Email Server
**Step 1**: Create JSON Code from Excel
 - Convert the Member List to JSON:
 - Go to Code Beautify.
 - Upload your Excel file that contains the member list with the columns: STT, Name, Email, and Gender (anh/chị).
 - Convert the data into JSON format.
 - Copy the generated JSON code.
 - 
**Step 2**: Update Data.js with the Member List
 - Paste the JSON Code:
 - Open the Data.js file in your project.
 - Replace the existing member list or add the new member list by pasting the JSON code from Step 1 into the appropriate section.
 - 
**Step 3**: Obtain App Password for Email
 - Get Your Email's App Password:
 - Log in to your Google account.
 - Navigate to Account Management -> Security -> 2-Step Verification.
 - Click on App Passwords and create a new one for Mail and your device.
 - Copy the generated app password.
 - 
**Step 4**: Update server.js with Email Password
 - Edit the server.js File:
 - Open the server.js file in your project.
 - Locate the section where the password is set (look for something like pass: 'your-password-here').
 - Replace the existing password with the one you copied in Step 3: pass: 'jrayvcmspzdpmwua'.
 - 
**Step 5**: Update the HTML Email Template
 - Edit email.handlebars:
 - Open the email.handlebars file.
 - Paste your desired HTML code into this file to define the content and structure of the email.
 - 
**Step 6**: Edit the Email Title in server.js
 - Update the Title:
 - In server.js, find the section where the email title (subject) is set.
 - Edit the title to reflect the purpose of your email.
 - 
**Step 7**: Run the Server
 - Start the Server:
 - Open your terminal.
 - Navigate to the directory where server.js is located.
 - Run the server using the command: node server.js.
