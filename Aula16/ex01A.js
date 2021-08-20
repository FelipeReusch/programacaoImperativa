// Aula 16

const delay = () =>  new Promise (resolve => setTimeout(resolve, 1000));
const umPorsegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorsegundo();
