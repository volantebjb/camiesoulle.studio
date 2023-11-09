module.exports = {
    apps: [
      {
        name: "camiesoulle.studio-azure",
        script: "npm",
        env: {
          NODE_ENV: "production",
        },
        args: "run start",
      },
    ],
  };