const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        this.deckId = res.data.deck_id;
    },
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        $('#cards').append(`<li>${res.data.cards[0].value} of ${res.data.cards[0].suit}</li>`)
    }
}

deck.init()