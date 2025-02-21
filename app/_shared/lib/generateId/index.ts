const generateId = (length: number = 32): string => {
    const characters = '-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'

    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
}

export default generateId
