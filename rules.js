export const RULES = {
    BLOCK_RULES : {
        h : /^(\*+.*?) ([A-Za-z0-9].+)$/,
        italic : /^(\-?) ([A-Za-z0-9].+)$/
    },

    INLINE_RULES : {
        h : /(\*+.*?) ([A-Za-z0-9].+)$/,
        italic : /\s(\-?) ([A-Za-z0-9].+)$/
    }

}
