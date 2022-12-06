export default function FormTabs() {
  const commonClasses = `nav-link
                  w-full
                  block
                  font-medium
                  text-[1.4rem]
                  leading-tight
                  uppercase
                  border-x-0 border-t-0 border-b-2 border-transparent
                  px-6
                  py-3
                  my-2
                  hover:border-transparent hover:bg-[#e2e8f0]
                  focus:border-transparent`;

  return (
    <div className={"flex justify-center"}>
      <div className={"w-[80rem]"}>
        <ul
          className="
            nav nav-tabs nav-justified
            flex flex-col
            md:flex-row
            flex-wrap
            list-none
            border-b-0
            pl-0
            mb-4
            "
          id="tabs-tabJustify"
          role="tablist"
        >
          {/*Tab-1*/}
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-credit-transfer"
              className={`${commonClasses} active`}
              id="tabs-home-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-credit-transfer"
              role="tab"
              aria-controls="tabs-credit-transfer"
              aria-selected="true"
            >
              Credit Transfer
            </a>
          </li>

          {/*Tab-2*/}
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-pain13"
              className={commonClasses}
              id="tabs-pain13-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-pain13"
              role="tab"
              aria-controls="tabs-pain13"
              aria-selected="false"
            >
              Pain13
            </a>
          </li>

          {/*Tab-3*/}
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-pain14"
              className={commonClasses}
              id="tabs-pain14-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-pain14"
              role="tab"
              aria-controls="tabs-pain14"
              aria-selected="false"
            >
              Pain14
            </a>
          </li>

          {/*Tab-4*/}
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-account-verification"
              className={commonClasses}
              id="tabs-account-verification-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-account-verification"
              role="tab"
              aria-controls="tabs-account-verification"
              aria-selected="false"
            >
              Account Verification
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
