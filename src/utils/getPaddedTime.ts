export default function getPaddedTime(time: string) {
    return time.substring(0, 2) + " : " + time.substring(3, 5)
}