const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Create a status bar item
    const cleanStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    cleanStatusBarItem.text = "$(trash)"; // Trash can icon
    cleanStatusBarItem.tooltip = "Clean Build Files";
    cleanStatusBarItem.command = 'clean-build-status-bar.cleanBuildFiles';
    cleanStatusBarItem.show();

    // Register the command to run the clean build files task
    let disposable = vscode.commands.registerCommand('clean-build-status-bar.cleanBuildFiles', async () => {
        // Get all tasks
        const tasks = await vscode.tasks.fetchTasks();
        
        // Find the "clean build files" task
        const cleanTask = tasks.find(task => task.name === 'clean build files');
        
        if (cleanTask) {
            // Execute the existing task
            await vscode.tasks.executeTask(cleanTask);
        } else {
            // If the task is not found, show an error message
            vscode.window.showErrorMessage('Could not find "clean build files" task');
        }
    });

    context.subscriptions.push(cleanStatusBarItem);
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
