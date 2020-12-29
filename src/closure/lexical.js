//Lexico
const buildCount = (i) => {
    let count = i;
    const distplayCount = () => {
        console.log(count++);
    };
    return distplayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();