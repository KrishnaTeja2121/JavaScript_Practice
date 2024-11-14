function studentGradingSystem(totalMarks, obtainMark,ClassAverage){
    let passingCriteria=totalMarks*0.5;
    let exceptionalCriteria=totalMarks*0.8;
    let hasPassed=obtainMark>=passingCriteria;
    let hasPerformedExceptionally=obtainMark>=exceptionalCriteria;
    let isAboveAverage=obtainMark>ClassAverage;

    return {
        hasPassed, hasPerformedExceptionally, isAboveAverage
    };

};
console.log(studentGradingSystem(500, 450, 300));
