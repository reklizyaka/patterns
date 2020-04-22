interface IFacade {
  generate();
  find();
}

class Facade implements IFacade {
  private securitySystem: SecuritySystem;
  private subSystem: SubSystem;

  constructor(securitySystem: SecuritySystem, subSystem: SubSystem) {
    this.securitySystem = securitySystem;
    this.subSystem = subSystem;
  }

  public generate() {
    this.securitySystem.checkUser();
    this.securitySystem.checkRights();
    this.subSystem.createNode();
  }

  public find() {
    this.securitySystem.checkUser();
    this.subSystem.parse();
  }
}

class Client {
  private iFacade: IFacade;

  constructor(facade: Facade) {
    this.iFacade = this.iFacade;
  }

  public execute(iFacade: IFacade) {
    iFacade.generate();
    iFacade.find();
  }
}

class SecuritySystem {
  checkUser(): boolean {
    return true;
  }

  checkRights(): boolean {
    return true;
  }
}

class SubSystem {
  public parse() {
    console.log("Parsing");
  }

  public createNode() {
    console.log("Creating program node");
  }
}

function clientRunner() {
  const facade = new Facade(new SecuritySystem(), new SubSystem());
  const client = new Client(facade);
  client.execute(facade);
}

clientRunner();
