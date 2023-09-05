function func1(x, theFunction) {
    if (x > 0) {
        theFunction();
        func1(x - 1, theFunction);
    }
}