// Example Typescript

// Работа с простыми типами
type TConcatFunc = (str1: string, str2: string) => string ;
const concat: TConcatFunc = (str1, str2) => `${str1}${str2}`;

const message = concat('Hello, ', 'Zar!');

// Работа с интерфейсами
interface IHometask {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData?: IHometask[];
};

const MyHometask: IHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Типизация функций, используя Generic
interface MyArray<T> {
	[N: number]: T;

	reduce<AccT>(fn: (acc: AccT, elem: T, index: number) => AccT, initial: AccT): AccT;
}

