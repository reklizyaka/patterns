interface Parser {
  parse(str: string): Order;
}

// class Client {
//   private parser: Parser;

//   constructor(parser: Parser) {
//     this.parser = parser;
//   }

//   public execute(parser: Parser) {
//     parser.parse("Hello world!");
//   }
// }

class Order {
  constructor(
    public firstName: string,
    public lastName: string,
    public orderAmount: number,
    public date?: string,
    public id?: string
  ) {
    this.date = new Date().toLocaleDateString();
    this.id = Math.random().toString().substring(2, 15);
  }
}

class JsonParser implements Parser {
  public parse(str: string): Order {
    let parsedString = JSON.parse(str);
    return new Order(
      parsedString.firstName,
      parsedString.lastName,
      parsedString.orderAmount
    );
  }
}

class XmlParser {
  public parseXml(firstName: string, lastName: string, orderAmount: number) {
    return new Order(firstName, lastName, orderAmount);
  }
}

class XmlParserAdapter implements Parser {
  _encoding: string;
  _xmlParser: XmlParser;
  _xmlVersion: number;

  constructor(xmlParser: XmlParser, xmlVersion: number, encoding: string) {
    this._encoding = encoding;
    this._xmlParser = xmlParser;
    this._xmlVersion = xmlVersion;
  }

  parse(str: string): Order {
    let parsedString = JSON.parse(str);
    return this._xmlParser.parseXml(
      parsedString.firstName,
      parsedString.lastName,
      parsedString.orderAmount
    );
  }
}

function RunnerAdapter() {
  let currString =
    '{"firstName":"Anna","lastName":"Reklizon","orderAmount":"42"}';
  const jsonParsed = new JsonParser().parse(currString);
  console.log(jsonParsed);
  const xmlParsed = new XmlParserAdapter(new XmlParser(), 1.0, "ololo").parse(
    currString
  );
  console.log(xmlParsed);
}

RunnerAdapter();
