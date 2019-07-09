class Kata {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

it('run tests', () => {
    const kata = new Kata('startup');

    expect(kata.name).toBe('startup');
});
