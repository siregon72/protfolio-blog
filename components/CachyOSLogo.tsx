import styles from "./CachyOSLogo.module.css";

// Based on Fastfetch's CachyOS terminal logo (MIT):
// https://github.com/fastfetch-cli/fastfetch/blob/dev/src/logo/ascii/c/cachyos.txt
// License: public/licenses/fastfetch.txt
const asciiLogo = `           .-------------------------:
          .+=========================.
         :++===++==================-       :++-
        :*++====+++++=============-        .==:
       -*+++=====+***++==========:
      =*++++========------------:
     =*+++++=====-                     ...
   .+*+++++=-===:                    .=+++=:
  :++++=====-==:                     -*****+
 :++========-=.                      .=+**+.
.+==========-.                          .
 :+++++++====-                                .--===.
  :++==========.                             :+++++++:
   .-===========.                            =*****+*+
    .-===========:                           .+*****+:
      -=======++++:::::::::::::::::::::::::-:  .---:
       :======++++====+++******************=.
        :=====+++==========++++++++++++++*-
         .====++==============++++++++++*-
          .===+==================+++++++:
           .-=======================+++:
             ..........................`;

export function CachyOSLogo() {
  return (
    <div className={styles.background} aria-hidden="true">
      <pre
        className={`${styles.ascii} text-zinc-950/[0.14] dark:text-white/[0.26]`}
      >
        {asciiLogo}
      </pre>
    </div>
  );
}
