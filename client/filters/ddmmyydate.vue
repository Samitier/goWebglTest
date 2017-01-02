<script>
    export default {
        ddmmyydate(value) {
            if(!value) return
            value = new Date(value)
            let M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                d = value.getDate(),
                m = M[value.getMonth()],
                y = value.getFullYear()
            return `${d}-${m}-${y}`
        }
    }
</script>