import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const DeviceLimitationModal = ({
  openModal,
  seOpenModal,
  loginCredentials,
  handleLogoutOtherDevices,
  loggedInDevices,
}) => {
  return (
    <div>
      <Dialog open={openModal} onOpenChange={seOpenModal}>
        <DialogTrigger asChild>trigger</DialogTrigger>

        <DialogContent className="modal-scrollbar max-w-[70%] overflow-y-auto bg-nad-primary-lite-1 md:max-w-[500px] ">
          <DialogHeader>
            <DialogTitle>All loggedIn devices</DialogTitle>
            <DialogDescription>
              <ul className="pl-5">
                {loggedInDevices?.map((device, index) => (
                  <li key={device?._id} className="my-1 list-decimal text-lg">
                    {device?.browser} on {device?.deviceType}
                  </li>
                ))}
              </ul>

              <div>
                <p className="my-2 text-xl font-semibold">
                  Do you want to logout from all other devices?
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="border border-stroke bg-slate-300 font-semibold"
                type="button"
                variant="secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={() =>
                handleLogoutOtherDevices(
                  loginCredentials?.email_or_phone,
                  loginCredentials?.password,
                )
              }
              className="font-semibold"
              type="submit"
            >
              Yes, Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeviceLimitationModal;
