const { execSync } = require('child_process');

const script = process.env.INPUT_SCRIPT ?? '';
try {
    execSync(script, { stdio: 'inherit', shell: true });
}
catch (exception) {
    process.exitCode = exception.status;
}