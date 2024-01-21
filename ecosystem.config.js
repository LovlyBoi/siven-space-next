module.exports = {
  apps: [
    {
      name: 'next',
      exec_mode: 'cluster',
      instances: '1',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
    },
  ],
}
