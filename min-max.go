func MinMax(v []int) (posMin int, posMax int) {
    max, min := 0, int((^uint(0)) >> 1)

    for i, e := range v {
        if e > max {
            max, posMax = e, i
        }
        if e < min {
            min, posMin = e, i
        }
    }

    return
}
