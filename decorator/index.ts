interface Component {
  defaultMethod();
}

class ConcreteComponent implements Component {
  public defaultMethod() {
    console.log("Component");
  }
}

class Decorator implements Component {
  private component: Component;

  constructor(component: Component) {
    this.component = component;
  }
  public defaultMethod() {
    this.component.defaultMethod();
  }
}

class ConcreteDecoratorA extends Decorator {
  private addedState: number;

  constructor(component: Component) {
    super(component);
    this.addedBehaviour();
  }

  public defaultMethod() {
    super.defaultMethod();
    console.log(" Adding state " + this.getState());
  }

  public addedBehaviour() {
    this.setState(1);
  }

  public setState(state: number) {
    this.addedState = state;
  }

  public getState(): number {
    return this.addedState;
  }
}

class ConcreteDecoratorB extends Decorator {
  private addedState: number;

  constructor(component: Component) {
    super(component);
    this.addedBehaviour();
  }

  public defaultMethod() {
    super.defaultMethod();
    console.log(" Adding state " + this.getState());
  }

  public addedBehaviour() {
    this.setState(2);
  }

  public setState(state: number) {
    this.addedState = state;
  }

  public getState(): number {
    return this.addedState;
  }
}

function main() {
  const concDecA = new ConcreteDecoratorA(new ConcreteComponent());
  concDecA.defaultMethod();
  console.log("\n*****");

  const concDecAB = new ConcreteDecoratorA(
    new ConcreteDecoratorB(new ConcreteComponent())
  );

  concDecAB.defaultMethod();
}
main();
