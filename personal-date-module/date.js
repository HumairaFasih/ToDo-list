exports.getDate = function getDate () {
    const today = new Date()
    const options = {
        month: 'long',
        day: '2-digit',
        weekday: 'long',
        year: 'numeric',
    }

    return today.toLocaleDateString("en-US", options)
}

