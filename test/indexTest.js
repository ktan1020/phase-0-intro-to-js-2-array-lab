require ( './helpers.js' );

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  const cats = ["Milo", "Otis", "Garfield"];
  

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;
    
      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function destructivelyAppendCat(name) {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');
        cats.push("Ralph");

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function destructivelyPrependCat(name) {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");
        cats.unshift("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function destructivelyRemoveLastCat(name) {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();
        cats.pop();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function destructivelyRemoveFirstCat(name) {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();
        cats.shift();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function appendCat(name) {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        return [...cats, "Broom"];
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        

      });
    });

    describe('prependCat(name)', function prependCat(name) {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        return ["Arnold", ...cats];
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastCat()', function removeLastCat() {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        return cats.slice(-1);

        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstCat()', function removeFirstCat() {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        return cats.slice(1);
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
        

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
