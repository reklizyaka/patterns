interface Subject {
  request();
}

class RealClass implements Subject {
  public RealClass() {
    this.heavyInitialConfiguration();
  }

  public request() {
    console.log("processing complete.");
  }

  private heavyInitialConfiguration() {
    console.log("Loading initial configuration...");
  }
}

class Proxyy implements Subject {
  private object: Subject;

  public request() {
    if (!this.object) {
      console.log("Not exist object");
      this.object = new RealClass();
    }
    this.object.request();
  }
}

function main() {
  let object = new Proxyy();
  object.request();
  object.request();
}

main();
