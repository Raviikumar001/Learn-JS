// const ADMIN =0;
// const READ_ONLY =1;
// const AUTHOR =2;

let array = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 17508],
      [11513, 11020],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Altic",
    ranges: [
      [994, 1008],
      [11392, 11308],
      [11513, 11220],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Cotoiii",
    ranges: [
      [994, 1008],
      [11392, 11308],
      [11513, 11020],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Coptiiic",
    ranges: [
      [994, 1008],
      [11392, 118708],
      [11513, 18520],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Crotic",
    ranges: [
      [994, 1008],
      [11392, 11008],
      [11513, 15520],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "CopItic",
    ranges: [
      [994, 1008],
      [11392, 12508],
      [11513, 11320],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Optic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];


// filter returns a new array

function filter(array , test)
{

    let passed = []
    for (let element of array )
    {
        if(test(element))
        {
            passed.push(element);

        }

    }

    return  passed;
}


// map returns a new array

function map(array, transfrom)
{
    let mapped = [];
    for( let element of array)
    {
        mapped.push(transfrom(element))
    }

    return mapped;
}


//reduce returns a single value 



function reduce(array, combine, start)
{
    let current = start;
    for (let element of array )
    {
        current = combine(current, element);
    }

    return current;
}


// console.log(reduce([1,2,3,4], (a,b)=> a + b , 0));

// console.log([1,2,3,4].reduce( (a,b)=> a + b ,2));


function characterCount(script)
{
    return script.ranges.reduce( (count, [from, to]) => {
        return count + (to - from );
    }, 0);
}

console.log( array.reduce( (a,b)=> {
    return characterCount(a) < characterCount(b) ? b : a;
}));








