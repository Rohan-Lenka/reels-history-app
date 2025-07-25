export default function getPaddedDate(date: string) {
    return date.substring(0, 2) + " / " + date.substring(3, 5) + " / " + date.substring(6, 10)
}