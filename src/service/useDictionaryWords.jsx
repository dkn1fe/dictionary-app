
const useDictionaryWords = () => {
 

    const getInfoByWords = async(words) => {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
        return res.json()
    }
return {getInfoByWords}
} 