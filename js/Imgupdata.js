function Imgupdata(jue, array) {
    var arraylen = array.length;
    speed++;
    if (speed % 2 == 0) {
        num++;
    }
    if (num >= array.length) {
        num = 0;
    }
    jue.src = array[num];
    // Gameline()
}
