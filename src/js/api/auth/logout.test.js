import { logout } from "./logout.js";
import localStorageMock from "../../storage/localStorage.mock.js"; 

global.localStorage = localStorageMock;

describe("logout", () => {
    it("should send a mock call to check if the storage method removeItem has been called", () => {
        localStorageMock.removeItem("token");
        localStorageMock.removeItem("profile");
        expect(localStorageMock.removeItem).toHaveBeenCalledTimes(2);
    })
})