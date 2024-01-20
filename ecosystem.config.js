module.exports = {
  apps: [
    {
      name: 'sivenSpaceNext',
      exec_mode: 'cluster',
      instances: '1',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
    },
  ],
}
