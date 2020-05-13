export function determinWindowSize( height, width ) {
    if ( width < 500 ) return 'phone'
    if ( width < 730 ) return 'sm'
    if ( width < 900 ) return 'md'
    if ( width < 1200 ) return 'lg'
    if ( width > 1200 ) return 'xl'
}

export function applySizedText(size, values) {
    const {phone, sm, md, lg, mx } = values

    switch(size){
        case 'phone':
            return phone
        case 'sm': 
            return sm
        case 'md':
            return md
        case 'lg':
            return lg
        default: 
            return mx
    }
}