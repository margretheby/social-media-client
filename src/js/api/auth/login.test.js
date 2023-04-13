import { login } from "./login.js";
import localStorageMock from "../../storage/localStorage.mock.js"; 

global.localStorage = localStorageMock;


describe("localStorageMock", () => {
    it("should send a mock call to check if the storage method setItem has been called", () => {
        localStorageMock.setItem("profileToken", "mockToken")
        expect(localStorageMock.setItem).toHaveBeenCalled();
    })
})