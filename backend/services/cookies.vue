<script>
    const MAX_DAYS = 14 //the cookies won't persist more than 14 days

    export default {
        set(name, value, persist) {
            let expires = ""
            if (persist) {
                let date = new Date()
                date.setTime(date.getTime() + (MAX_DAYS * 24 * 60 * 60 * 1000))
                expires = "; expires=" + date.toUTCString()
            }
            document.cookie = name + "=" + value + expires + "; path=/"
        },
        get(name) {
            let cookieName = name + "="
            let cookies = document.cookie.split(';')
            for(let cookie of cookies) {
                while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length)
                if (cookie.indexOf(cookieName) == 0) return cookie.substring(cookieName.length, cookie.length)
            }
            return null;
        },
        delete(name) {
            createCookie(name,"", false)
        }
    }
</script>