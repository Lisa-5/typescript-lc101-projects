"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        this.massKg = 0;
        for (var i = 0; i < items.length; i++) {
            this.massKg += items[i].massKg;
        }
        return this.massKg;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === false) {
            return false;
        }
        else if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === false) {
            return false;
        }
        else if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
