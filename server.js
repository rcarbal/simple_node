const NAME = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`YOUR NAME IS: ${NAME}!!!`);
    await sleep(5000);
  }
}

main();
